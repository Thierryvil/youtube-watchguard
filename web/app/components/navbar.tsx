import { Menu, Search } from "@mui/icons-material";
import { useState } from "react";
import { FetchProps } from "../services/api";
import * as yup from 'yup';

const searchSchema = yup.object().shape({
  query: yup.string().required('O campo de pesquisa não pode estar vazio.'),
});

interface NavBarProps {
  fetchData: (props: FetchProps) => Promise<void>
  minutes: number[]
  setData: (data: any) => void
  setLoading: (loading: boolean) => void
}

function Navbar({ minutes, fetchData, setData, setLoading }: NavBarProps) {
  const [query, setSearchQuery] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  const handleSearch = async () => {
    try {
      setLoading(true)
      await searchSchema.validate({ query });
      setErrorMessage('');
      await fetchData({
        query: query,
        secondsPerWeekDays: minutes.map((duration) => duration * 60),
        setData: setData
      })
    }
    catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      }
    }
    finally {
      setLoading(false)
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="shadow-md">
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center">
          <Menu />
          <p className="text-xl font-bold px-4">YouTube WatchGuard</p>
        </div>
        <div className="flex items-center flex-grow justify-center">
          <div>
            <div className="flex items-center border rounded-md w-80">
              <input
                type="text"
                className="p-2 w-full text-black"
                placeholder="Pesquisar no YouTube"
                value={query}
                onChange={e => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <Search onClick={handleSearch} />
            </div>
            <div>
              {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;