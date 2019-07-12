import app from './app';
(async () => {
    try {
        const App = new app().instance;
        const PORT = App.get('PORT');
        App.listen(PORT, () => console.log(`App running on port ${PORT}`));
    } catch (err) {
        console.log(err);
    }
})();