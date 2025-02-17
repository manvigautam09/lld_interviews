"use client";
import { useState } from "react";
import Image from "next/image";

import { PokeDetails, pokemonDetails } from "../utils/constant";

const PokemonCard = ({ pokemonDetails }: { pokemonDetails: PokeDetails }) => {
  return (
    <div className="bg-white rounded-lg flex flex-col justify-center items-center py-3 px-5 mb-2 shadow-md">
      <div className="capitalize">{pokemonDetails.name}</div>
      <div className="border-2 rounded-full flex justify-center items-center w-[120px] h-[120px]">
        <Image src={pokemonDetails.image} alt="Poke" width={100} height={100} />
      </div>

      <div className="text-center">{pokemonDetails.description}</div>
    </div>
  );
};

const Pokemons = () => {
  const [selectedPokemon, setSelectedPokemon] = useState(2);

  return (
    <div className="text-black bg-white w-[100vw] h-[100vh] overflow-auto flex justify-center items-center">
      <div className="w-[300px] h-[500px] bg-green-300 p-3 rounded shadow-md flex flex-col justify-between">
        <div>
          <select
            value={pokemonDetails[selectedPokemon].name}
            onChange={(e) => {
              const index = pokemonDetails.findIndex(
                (item) => item.name === e.target.value
              );
              if (index != -1) {
                setSelectedPokemon(index);
              }
            }}
            className="focus:outline-none w-full h-10 rounded mb-2 pl-2"
          >
            {pokemonDetails.map((pokeDetails) => (
              <option key={pokeDetails.name}>{pokeDetails.name}</option>
            ))}
          </select>

          <PokemonCard pokemonDetails={pokemonDetails[selectedPokemon]} />
        </div>
        <div className="flex h-12 space-x-4">
          <button
            className="bg-purple-300 rounded-lg w-[50%] cursor-pointer"
            onClick={() => {
              const prev = selectedPokemon - 1;
              if (prev != -1) {
                setSelectedPokemon(prev);
              }
            }}
          >
            Previous
          </button>
          <button
            className="bg-purple-300 rounded-lg w-[50%] cursor-pointer"
            onClick={() => {
              const next = selectedPokemon + 1;
              if (next < pokemonDetails.length) {
                setSelectedPokemon(next);
              }
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pokemons;
