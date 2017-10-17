/* @flow */

/** generalSearch helpers */
/** creates a queue of nodes */
export const makeQueue = (nodes: Node | Array<Node>) =>
  Array.isArray(nodes) ? nodes : [nodes];
/** creates an initial node out of a state */
export const makeNode = (
  state: State,
  parent?: Node | null = null,
  operator?: Operator | null = null,
  depth?: number = 0,
  pathCost?: number = 0
): Node => ({
  state,
  parent,
  operator,
  depth,
  pathCost,
});

/** Problem helpers */
/** gets the initial state of a problem */
export const initialState = (problem: Problem): State => problem.initialState;
/** gets the goalTest function of a problem */
export const goalTest = (problem: Problem): GoalTestFunc => problem.goalTest;

/** Node helpers */
/** gets the state of a node */
export const state = (node: Node): State => node.state;
/** expands a node according to a problem
 * @TODO implement properly
*/

export const expand = (node: Node, problem: Problem): Array<Node> => {
  const newStateConfigs = problem.stateSpace(node.state, problem.operators);
  return newStateConfigs.map(stateConfig =>
    makeNode(
      stateConfig.state,
      node,
      stateConfig.operator,
      node.depth + 1,
      problem.pathCost(node.state, [stateConfig.operator])
    )
  );
};
