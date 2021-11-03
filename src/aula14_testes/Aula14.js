import React, { useState } from 'react';
import Dropdown from './Dropdown/Dropdown';
import Contador from './Contador/Contador';

export default function Aula14() {
    const [selectedPokemon, setSelectedPokemon] = useState(null);

    return (
        <div className="Aula14">
            {selectedPokemon && <div>Pokemon: {selectedPokemon}</div>}
            <Dropdown
                title="Selecione seu Pokémon Inicial"
                options={['Charizard', 'Bulbasaur', 'Eevee', 'Pikachu', 'Mewtwo']}
                onSelect={setSelectedPokemon}
            />
            <Contador />
        </div>
    );
}
