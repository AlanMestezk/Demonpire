import { ReactNode, createContext, useState } from "react";
//import bardo from '../assets/bardo/bardo.png'

interface PlayerProviderProps {
  children: ReactNode;
}

type PlayerContextData = {

  name:   string;
  kind:   string;
  person: string;

  force: string | number;
  defense: string | number;
  agility: string | number;

  handleChange: (

    name:    string,
    person:  string,
    kind:    string,

    force:   string | number,
    defense: string | number,
    agility: string | number

  ) => void;
};

export const PlayerContext = createContext<PlayerContextData>({
  name:         '',
  person:       '',
  kind:         '',
  force:        '',
  defense:      '',
  agility:      '',
  handleChange: (_name, _kind, _force, _defense, _agility) => {},
});

export const PlayerProvider = ({ children }: PlayerProviderProps) => {

  const [playerInfo, setPlayerInfo] = useState({

    name:    '',
    person:   '',
    kind:    '',
    force:   '',
    defense: '',
    agility: ''

});

  const handleChange = (
    name:    string,
    person:  string,
    kind:    string,

    force:   string | number,
    defense: string | number,
    agility: string | number

  ) => {
    setPlayerInfo({

      ...playerInfo,

      name,
      person,
      kind,

      force:   String(force),
      defense: String(defense),
      agility: String(agility),
    });
  };

  return (
    <PlayerContext.Provider
      value={{
        ...playerInfo,
        handleChange,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};
