import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  const pokemonId = useSignal(1);

  return (
    <>
      <span class="text-2xl">Simple Searcher</span>
      <span class="text-9xl">{pokemonId}</span>

      <div class="flex gap-2 mt-2">
        <button onClick$={() => pokemonId.value--} class="btn btn-primary">
          Anterior
        </button>
        <button onClick$={() => pokemonId.value++} class="btn btn-primary">
          Siguientes
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
