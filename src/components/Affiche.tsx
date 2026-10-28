export default function Affiche() {
  return (
    <>
      <form className="border w-84 min-h-14 p-2">
        <label>
          <span>Image</span>
          <input type="file" />
        </label>

        <br />

        <label>
          <span>Type</span>
        </label>

        <label className="cursor-pointer" htmlFor="Nouveauté">
          <input
            type="radio"
            id="Nouveauté"
            name="AfficheType"
            value="Nouveauté"
            className="peer sr-only"
          />
          <span
            className="inline-block rounded-lg border border-gray-300 bg-white px-2 py-1.5 text-gray-700
                 peer-checked:border-red-600 peer-checked:bg-red-600 peer-checked:text-white
                 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-red-600"
          >
            Nouveauté
          </span>
        </label>

        <label className="cursor-pointer" htmlFor="Promo">
          <input
            type="radio"
            id="Promo"
            name="AfficheType"
            value="Promo"
            className="peer sr-only"
          />
          <span
            className="inline-block rounded-lg border border-gray-300 bg-white px-2 py-1.5 text-gray-700
                 peer-checked:border-red-600 peer-checked:bg-red-600 peer-checked:text-white
                 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-red-600"
          >
            Promo
          </span>
        </label>

        <label className="cursor-pointer" htmlFor="offre-special">
            <input
              type="radio"
              id="offre-special"
              name="AfficheType"
              value="offre-special"
              className="peer sr-only"
            />
          <span
            className="inline-block rounded-lg border border-gray-300 bg-white px-2 py-1.5 text-gray-700 
          peer-checked:border-red-600 peer-checked:bg-red-600 peer-checked:text-white
            peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-red-600"
          >
            Offre Spécial
          </span>
        </label>

        <br />

        <label>
          <span>Prix</span>
          <input type="text" className="text-sm w-16"></input>
        </label>

        <br />

        <label>
          <span>Unité</span>
          <select className="border">
            <option value="Kg">Kg</option>
            <option value="L">L</option>
          </select>
        </label>
      </form>
    </>
  );
}
