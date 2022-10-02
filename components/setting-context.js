import React from 'react';

const settings={
	backendApiUrl: "https://laravel.ae/claudio-pacifico/backend/api.php",
	uploadsUrl: "https://laravel.ae/claudio-pacifico/backend/uploads/images",
	booksUrl: "https://laravel.ae/claudio-pacifico/backend/uploads/books"
};

const SettingContext=React.createContext(settings);
export default SettingContext;
