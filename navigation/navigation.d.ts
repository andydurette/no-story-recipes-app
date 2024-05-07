export type HomeStackParamList = {
	Index: undefined;
};

export type RecipesStackParamList = {
	Index: undefined;
};

export type SettingsStackParamList = {
	Index: undefined;
};

export type BottomTabStackParamList = {
	Home: NavigatorScreenParams<HomeStackParamList>;
	Recipes: NavigatorScreenParams<RecipeStackParamList>;
	Settings: NavigatorScreenParams<SettingsStackParamList>;
};