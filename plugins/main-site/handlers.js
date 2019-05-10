/**
 * @function
 * @name    home
 * @param   {object} request
 * @param   {object} h
 */
const home = async (request, h) => {
  
  return h.view('plugins/main-site/views/home', {myName: 'Joel Rivera Díaz'});
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
