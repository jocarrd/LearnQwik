import { component$, useSignal, useTask$ } from "@builder.io/qwik";

type Props = {
  id: number;
  backImage: boolean;
  isVisible?: boolean;
};

export const PokemonImage = component$(
  ({ id, backImage = false, isVisible = false }: Props) => {
    const imageLoaded = useSignal(false);

    useTask$(({ track }) => {
      track(() => id);
      imageLoaded.value = false;
    });

    const url = backImage
      ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`
      : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

    return (
      <div class="flex items-center justify-center ">
        {!imageLoaded.value && (
          <span class="h-[200px] justify-center flex items-center">
            Loading...
          </span>
        )}
        <img
          height={200}
          width={200}
          src={url}
          alt="Pokemon Sprite"
          onLoad$={() => {
            imageLoaded.value = true;
          }}
          class={[
            { hidden: !imageLoaded.value, "brightness-0": !isVisible },
            "transition-all",
          ]}
        />
      </div>
    );
  }
);
