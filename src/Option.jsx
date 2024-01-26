// Composant Option pour représenter une option dans un menu déroulant
const Option = ({ taskName }) => {
  // Rendu d'une balise option avec la valeur et l'affichage définis par taskName
  return <option value={taskName}>{taskName}</option>;
};

export default Option;