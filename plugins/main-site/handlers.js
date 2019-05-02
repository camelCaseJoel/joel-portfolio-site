/**
 * @function
 * @name    home
 * @param   {object} request
 * @param   {object} h
 */
const home = async (request, h) => {
  
  return `
    <h1>Hello, little server</h1>
    <li>be good</li>
    <li>dont do stupid shit</li>
    <li>thats right</li>
  `
};

/**
 * @function
 * @name    home
 * @param   {object} request
 * @param   {object} h
 */
const game = async () => {
  return 'THE  G A M E is ---> Smash & DarkSouls'
};



module.exports = {
  home,
  game
}
