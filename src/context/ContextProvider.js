import { createContext, useContext, useState } from 'react';

const StateContext = createContext();

// eslint-disable-next-line react/prop-types
export const ContextProvider = ({ children }) => {
	const [navPosition, setNavPosition] = useState('');
	const [projectId, setProjectId] = useState(1);

	const setNavClass = (value) => {
		setNavPosition(value);
	};

	return (
		// eslint-disable-next-line react/jsx-no-constructed-context-values
		<StateContext.Provider
			value={{
				navPosition,
				setNavClass,
				projectId,
				setProjectId,
			}}
		>
			{children}
		</StateContext.Provider>
	);
};

export const useStateContext = () => useContext(StateContext);
