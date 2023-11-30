import React from "react";
import { CharacterEntity } from "./list.vm";
import {
  ListEmpty,
  ListHeader,
  ListItem,
  ListLoading,
  ListPagination,
} from "./components";
import { ErrorNotification } from "@/common";

interface Props {
  characters: CharacterEntity[];
  isLoading: boolean;
  totalPages: number;
  errorMessage?: string;
  onChangePage: (page: number) => void;
}

export const List: React.FC<Props> = (props) => {
  const { characters, isLoading, totalPages, onChangePage, errorMessage } = props;
  const [showError, setShowError] = React.useState<boolean>(false);

  const isListEmpty = React.useMemo<boolean>(() => {
    return characters.length === 0 ? true : false;
  }, [characters]);

  React.useEffect(() => {
    if (errorMessage) {
      setShowError(true);
    }
  }, [errorMessage]);

  return (
    <div className="members-list-container">
      <ListHeader />

      {/* <ListSearch /> */}

      {isLoading && <ListLoading />}

      {!isLoading && (
        <>
          <div className="members-list">
            {isListEmpty && <ListEmpty />}

            {!isListEmpty &&
              characters.map((character) => (
                <ListItem character={character} key={character.id} />
              ))}
          </div>

          {!isListEmpty && (
            <ListPagination
              totalPages={totalPages}
              onChangePage={onChangePage}
            />
          )}
        </>
      )}
      <ErrorNotification
        isOpen={showError}
        errorMessage={errorMessage}
        handleClose={() => setShowError(false)}
      />
    </div>
  );
};
