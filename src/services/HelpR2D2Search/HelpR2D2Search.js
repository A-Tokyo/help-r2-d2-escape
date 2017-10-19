/* @flow */
import _ from 'lodash';

import { Store } from '../';
import {
  generalSearch,
  backTrackOperators,
  backTrackCost,
} from '../Search/Search';
import {
  breadthFirstQueuingFunc,
  depthFirstQueuingFunc,
  uniformCostQueuingFunc,
  iterativeDeepeningQueuingFunc,
  greedyQueuingFuncA,
  greedyQueuingFuncB,
  aStarQueuingFuncA,
  aStarQueuingFuncB,
} from '../Search/queuingFunctions';

import { applyOperator } from './HelpR2D2SearchHelpers';

/** The max depth ID search ever reaches, pseudo wise would be infinity
 * but the application are bounded by memory.
 */
const ID_MAX_DEPTH = 10000;

/**
 * Creates an R2D2 search problem according to a grid
 * then runs the general search algorithm according to the strategy and returns the result.
 *
 * Author: Tokyo
 */
const Search = (
  grid: { grid: Array<Array<any>>, config: Object },
  strategy: SearchStrategy = 'BF',
  visualize: boolean = false
): {
  sequence: Array<Operator> | null,
  cost: number | null,
  expandedNodesCount: number | null,
} => {
  /** keep track of the previous state */
  /** Reset the global store */
  Store.reset();
  /** create the search problem */
  const problem: Problem = {
    operators: ['move_north', 'move_south', 'move_east', 'move_west'],
    initialState: {
      cell: _.cloneDeep(grid.config.playerPosition),
      unPushedPads: grid.config.pressurePadsCount,
      rocksPositions: _.cloneDeep(grid.config.rocksPositions),
    },
    stateSpace: (
      state: State,
      operators: Array<Operator>
    ): Array<StateConfig> => {
      let newStateConfigs: Array<StateConfig> = [];
      operators.forEach(operator => {
        const newState: State | null = applyOperator(
          operator,
          state,
          grid,
          Store.previousStates
        );
        if (newState) {
          newStateConfigs = newStateConfigs.concat({
            operator,
            state: newState,
          });
        }
      });
      return newStateConfigs;
    },
    goalTest: (state: State) =>
      state.unPushedPads === 0 &&
      _.isEqual(state.cell, grid.config.teleportalPosition),
    pathCost: (state: State, operators: Array<Operator>): number =>
      operators.length,
    heuristicCostA: (
      currState: State,
      operators: Array<Operator>,
      newState: State,
      gridConfig: GridConfigObject
    ): number => {
      /**
       * @TODO CODE heuristicCostA
       */
      return 0;
    },
    heuristicCostB: (
      currState: State,
      operators: Array<Operator>,
      newState: State,
      gridConfig: GridConfigObject
    ): number => {
      /**
       * @TODO CODE heuristicCostB
       */
      return 0;
    },
  };

  /** set the propper queuing function */
  let qingFunc: QueuingFunction = breadthFirstQueuingFunc;

  switch (strategy) {
    case 'BF':
      qingFunc = breadthFirstQueuingFunc;
      break;
    case 'DF':
      qingFunc = depthFirstQueuingFunc;
      break;
    case 'UC':
      qingFunc = uniformCostQueuingFunc;
      break;
    case 'ID':
      qingFunc = iterativeDeepeningQueuingFunc(ID_MAX_DEPTH);
      break;
    case 'GR1':
      qingFunc = greedyQueuingFuncA;
      break;
    case 'GR2':
      qingFunc = greedyQueuingFuncB;
      break;
    case 'AS1':
      qingFunc = aStarQueuingFuncA;
      break;
    case 'AS2':
      qingFunc = aStarQueuingFuncB;
      break;
    default:
      console.error('unknown search strategy: ', strategy);
  }

  /** Initialize the returned variables */
  let searchResNode = null;
  let expandedNodesCount = null;

  /** Seperating special case from usual case search algorithms and updating the returned variables accordingly. */
  if (strategy === 'ID') {
    /** Special case strategies go here */
    for (let maxDepth = 1; maxDepth < ID_MAX_DEPTH; maxDepth += 1) {
      const genSearchRes = generalSearch(
        problem,
        iterativeDeepeningQueuingFunc(maxDepth)
      );
      if (genSearchRes.node) {
        searchResNode = genSearchRes.node;
        expandedNodesCount = genSearchRes.expandedNodesCount;
        break;
      }
      /** VERY IMPORTANT RESET PREVIOUS STATES */
      Store.reset('previousStates');
    }
  } else {
    /** Usual case strategies go here */
    const {
      node: currSearchResNode,
      expandedNodesCount: currExpandedNodesCount,
    } = generalSearch(problem, qingFunc);
    searchResNode = currSearchResNode;
    expandedNodesCount = currExpandedNodesCount;
  }

  const cost: number | null = searchResNode
    ? backTrackCost(searchResNode)
    : null;
  const sequence: Array<Operator> = searchResNode
    ? backTrackOperators(searchResNode)
    : [];

  console.log(
    'visualizationStatesInOrder',
    Store.get('visualizationStatesInOrder')
  );

  /** VERY IMPORTANT RESET PREVIOUS STATES */
  Store.reset('previousStates');

  return {
    sequence,
    cost,
    expandedNodesCount,
  };
};

export default Search;
