import React from 'react';
import InlineSVG from 'svg-inline-react';

import './StormtrooperObstacle.css';

const svgSource = `<svg
baseProfile="tiny" class="stormtrooper-svg" width="30px" version="1.2" viewBox="0 0 512 512" width="512px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M218.206,426.462c-5.007,0-9.048,4.041-9.048,9.049v54.29c0,5.007,4.041,9.048,9.048,9.048c5.007,0,9.048-4.041,9.048-9.048  v-54.29C227.254,430.503,223.213,426.462,218.206,426.462"/><path d="M290.593,426.462c-5.008,0-9.049,4.041-9.049,9.049v54.29c0,5.007,4.041,9.048,9.049,9.048c5.007,0,9.048-4.041,9.048-9.048  v-54.29C299.641,430.503,295.6,426.462,290.593,426.462"/><path d="M453.462,127.868v-18.097c0-59.721-49.577-108.58-110.135-108.58h-88.928h-88.928c-60.563,0-110.135,48.858-110.135,108.58  v18.097h199.062H453.462z"/><path d="M471.559,272.641v-90.483c0,0,0-18.097-18.097-18.097v-18.097H254.399H55.336v18.097c-18.097,0-18.097,18.097-18.097,18.097  v90.483c-22.957,10.156-36.193,29.112-36.193,54.29c0,33.637,53.913,80.764,53.913,90.483c0,54.29,37.524,90.482,92.262,90.482  c20.011,0,38.373-6.338,53.142-16.836c-0.036-0.447-0.253-0.812-0.253-1.26v-54.29c0-9.991,8.129-18.097,18.097-18.097  c8.07,0,14.68,5.407,17.001,12.735h1.096v-3.688c0-9.99,8.129-18.097,18.096-18.097s18.097,8.106,18.097,18.097v3.688h1.096  c2.32-7.328,8.93-12.735,17.001-12.735c9.967,0,18.097,8.105,18.097,18.097v54.29c0,0.447-0.213,0.812-0.26,1.26  c14.774,10.498,33.13,16.836,53.147,16.836c54.737,0,92.262-36.192,92.262-90.482c0-9.72,53.913-56.847,53.913-90.483  C507.752,301.753,494.521,282.797,471.559,272.641 M136.771,471.704c-14.986,0-27.145-12.159-27.145-27.146  s12.159-27.145,27.145-27.145s27.145,12.158,27.145,27.145S151.757,471.704,136.771,471.704 M163.916,345.027h-31.027  c-3.004,0-5.167-1.626-5.167-3.617c0-2.003,2.162-4.064,5.167-4.665l31.027-9.814V345.027z M218.206,322.218  c-10.568,4.383-20.789,9.814-30.827,14.751c-1.614,0.801-3.535,1.402-5.367,2.038v-25.083  c12.848-11.052,24.323-18.627,36.193-23.599V322.218z M127.723,254.544c-36.193,0-36.193-72.386-36.193-72.386h144.773  C236.303,182.158,163.916,254.544,127.723,254.544 M272.496,316.186c-5.903-1.413-11.911-2.262-18.097-2.262  c-6.191,0-12.2,0.849-18.096,2.262v-31.351c5.731-1.131,11.705-1.838,18.096-2.109c6.398,0.271,12.371,0.979,18.097,2.109V316.186z   M326.786,339.007c-1.839-0.636-3.747-1.237-5.373-2.038c-10.038-4.937-20.253-10.368-30.82-14.751v-31.893  c11.876,4.972,23.339,12.547,36.193,23.599V339.007z M372.027,471.704c-14.986,0-27.146-12.159-27.146-27.146  s12.159-27.145,27.146-27.145s27.145,12.158,27.145,27.145S387.014,471.704,372.027,471.704 M344.882,345.027v-18.097l31.033,9.814  c3.005,0.601,5.16,2.662,5.16,4.665c0,1.991-2.155,3.617-5.16,3.617H344.882z M381.075,254.544  c-36.193,0-108.579-72.386-108.579-72.386h144.772C417.269,182.158,417.269,254.544,381.075,254.544"/><path d="M254.399,417.414c-5.007,0-9.048,4.041-9.048,9.048v72.387c0,5.007,4.042,9.048,9.048,9.048  c5.007,0,9.048-4.041,9.048-9.048v-72.387C263.447,421.455,259.406,417.414,254.399,417.414"/></svg>`;

const StormtrooperObstacle = () => <InlineSVG src={svgSource} />;

export default StormtrooperObstacle;