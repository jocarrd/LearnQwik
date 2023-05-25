import { $, component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { PokemonImage } from "~/components/pokemons/pokemon-image";

export default component$(() => {
  const pokemonId = useSignal(1);
  const showBackImage = useSignal(false);
  const isPokemonVisible = useSignal(false);

  const changePokemonId = $((value: number) => {
    if (pokemonId.value + value <= 0) return;

    pokemonId.value += value;
  });

  return (
    <>
      <span class="text-2xl">Simple Searcher</span>
      <span class="text-9xl">{pokemonId}</span>

      <PokemonImage
        isVisible={isPokemonVisible.value}
        id={pokemonId.value}
        backImage={showBackImage.value}
      />

      <div class="flex gap-2 mt-2">
        <button onClick$={() => changePokemonId(-1)} class="btn btn-primary">
          Anterior
        </button>
        <button
          onClick$={() => changePokemonId(+1)}
          class="btn btn-primary mr-1"
        >
          Siguientes
        </button>

        <button
          onClick$={() => (showBackImage.value = !showBackImage.value)}
          class="btn btn-primary"
        >
          Voltear
        </button>
        <button
          onClick$={() => (isPokemonVisible.value = !isPokemonVisible.value)}
          class="btn btn-primary"
        >
          {!isPokemonVisible.value ? "Revelar" : "Ocultar"}
        </button>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "PokeQwik",
  meta: [
    {
      name: "description",
      content: "PokeQwik",
    },
  ],
};
