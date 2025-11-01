export const templates = {
  inicio: () => fetch('pages/inicio.html')
    .then(r => r.ok ? r.text() : Promise.reject('Página não encontrada')),
  projetos: () => fetch('pages/projetos.html')
    .then(r => r.ok ? r.text() : Promise.reject('Página não encontrada')),
  cadastros: () => fetch('pages/cadastros.html')
    .then(r => r.ok ? r.text() : Promise.reject('Página não encontrada'))
};
