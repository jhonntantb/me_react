import { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const initialState = {
	chat: false,
	cart: false,
	userProfile: false,
	notification: false,
};

// eslint-disable-next-line react/prop-types
export const ContextProvider = ({ children }) => {
	const [navPosition, setNavPosition] = useState('');

	const [currentColor, setCurrentColor] = useState('#03C9D7');
	const [currentMode, setCurrentMode] = useState('Light');
	const [themeSettings, setThemeSettings] = useState(false);
	const [activeMenu, setActiveMenu] = useState(true);
	const [isClicked, setIsClicked] = useState(initialState);

	const setNavClass = (value) => {
		setNavPosition(value);
	};

	const setColor = (color) => {
		setCurrentColor(color);
		localStorage.setItem('colorMode', color);
	};

	const handleClick = (clicked) =>
		setIsClicked({ ...initialState, [clicked]: true });

	return (
		// eslint-disable-next-line react/jsx-no-constructed-context-values
		<StateContext.Provider
			value={{
				navPosition,
				setNavClass,
				currentColor,
				currentMode,
				activeMenu,
				setActiveMenu,
				handleClick,
				isClicked,
				initialState,
				setColor,
				setIsClicked,
				setCurrentColor,
				setCurrentMode,
				themeSettings,
				setThemeSettings,
			}}
		>
			{children}
		</StateContext.Provider>
	);
};

export const useStateContext = () => useContext(StateContext);
