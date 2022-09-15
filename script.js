const POKE_URL = 'https://pokeapi.co/api/v2';

const POKEMON = `${POKE_URL}/pokemon`;

const NAME = `${POKEMON}/name`;

const consumirApi = () => {
 fetch('https://pokeapi.co/api/v2')
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => {
   console.log(error);
  });
};

console.log(consumirApi());
