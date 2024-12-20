import React from "react";
import { useNavigate } from "react-router-dom";

const colorButton = {
  normal: "bg-[#A0A0A0] border-[#DCDCDC]",
  fighting: "bg-[#C85500] border-[#DC6900]",
  flying: "bg-[#79BCD7] border-[#78DCFF]",
  poison: "bg-[#BE78BE] border-[#D28CD2]",
  ground: "bg-[#CCA142] border-[#F9C75A]",
  rock: "bg-[#A07850] border-[#B48C64]",
  bug: "bg-[#32B432] border-[#46C846]",
  ghost: "bg-[#8C78F0] border-[#A08CFF]",
  steel: "bg-[#96B4DC] border-[#AAC8F0]",
  fire: "bg-[#FF3700] border-[#FF6900]",
  water: "bg-[#0094E5] border-[#14B9FF]",
  grass: "bg-[#92BF19] border-[#B4F000]",
  electric: "bg-[#E4B700] border-[#FFE100]",
  psychic: "bg-[#DC78C8] border-[#EF8BDB]",
  ice: "bg-[#00B7EE] border-[#14F5FF]",
  dragon: "bg-[#3C64C8] border-[#5078DC]",
  dark: "bg-[#606060] border-[#787878]",
  fairy: "bg-[#FF7EB8] border-[#FDAEDA]",
  stellar: "bg-[#A0A0A0]",
  shadow: "bg-[#A0A0A0]",
  unknown: "bg-[#A0A0A0]",
};

function SearchResults({ searchResults }) {
  const navigate = useNavigate();
  const goToPokemonProfile = (pokemonId) => {
    navigate(`/profilepokemon/${pokemonId}`);
  };

  const setButtonColor = (type) => {
    return colorButton[type];
  };

  const formattedId = searchResults.id.toString().padStart(4, "0");
  const formattedName =
    searchResults.name.charAt(0).toUpperCase() +
    searchResults.name.slice(1).toLowerCase();
  return (
    <div className="grid grid-cols-4 gap-5">
      <div
        className="grid border border-[#466E9B] py-4 rounded-3xl bg-[#0A141E] text-white cursor-pointer"
        onClick={() => goToPokemonProfile(searchResults.id)}
      >
        <div className="flex justify-center">
          <img
            src={
              searchResults.sprites?.other["official-artwork"]?.front_default
            }
            alt={searchResults.name}
          />
        </div>
        <div className="grid gap-y-10 px-5">
          <div>
            <h1 className="text-[#B4EBFF]">{formattedId}</h1>
            <h1 className="text-xl font-semibold">{formattedName}</h1>
          </div>
          <div className="grid grid-cols-2 text-center gap-x-5">
            {searchResults.types?.map((type) => {
              const formattedType =
                type.type.name.charAt(0).toUpperCase() +
                type.type.name.slice(1).toLowerCase();
              return (
                <h1
                  className={`border rounded-full py-1 ${setButtonColor(
                    type.type.name
                  )}`}
                  key={type.slot}
                >
                  {formattedType}
                </h1>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
