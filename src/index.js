/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
  focus,
  knowsProgramming,
  config
) {
  if (focus == 'family' && knowsProgramming == true) {
    return Math.ceil(800 / config.family);
  }
  if (focus == 'friends' && knowsProgramming == true) {
    return Math.ceil(800 / config.friends);
  }
  if (focus == 'normal_life' && knowsProgramming == true) {
    return Math.ceil(800 / config.normal_life);
  }
  if (focus == 'profession' && knowsProgramming == true) {
    return Math.ceil(800 / config.profession);
  }
  if (focus == 'carrier' && knowsProgramming == true) {
    return Math.ceil(800 / config.carrier);
  }
  if (focus == 'top_peformance' && knowsProgramming == true) {
    return Math.ceil(800 / config.top_peformance);
  }
  if (focus == 'family' && knowsProgramming == false) {
    return Math.ceil(1300 / config.family);
  }
  if (focus == 'family' && knowsProgramming == false) {
    return Math.ceil(1300 / config.family);
  }
  if (focus == 'friends' && knowsProgramming == false) {
    return Math.ceil(1300 / config.friends);
  }
  if (focus == 'normal_life' && knowsProgramming == false) {
    return Math.ceil(1300 / config.normal_life);
  }
  if (focus == 'profession' && knowsProgramming == false) {
    return Math.ceil(1300 / config.profession);
  }
  if (focus == 'carrier' && knowsProgramming == false) {
    return Math.ceil(1300 / config.carrier);
  }
  if (focus == 'top_peformance' && knowsProgramming == false) {
    return Math.ceil(1300 / config.top_peformance);
  }
};
