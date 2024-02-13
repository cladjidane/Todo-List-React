function Title() {
  let title = "Gestionnaire de tâches"

  const handleCLick = () => { 
    console.log(title)
    title = "Nouveau titre"
    console.log(title)
  }

  // const handleCLickFat = (titleChanged) => { 
  //   let newTitle = titleChanged
  //   let combinedTitle = null
  //   let sameTitle = null
    
  //   if(newTitle === title) {
  //     let suffixeTitle = ' (Déjà nommé)'
  //     combinedTitle = newTitle + suffixeTitle
  //   } else {
  //     sameTitle = newTitle
  //   }

  //   if(combinedTitle) title = combinedTitle
  //   else if(sameTitle) title = sameTitle

  //   console.log(title)
  // }

  return (
    <>
      <h1>Todo List</h1>
      <h2>{title}</h2>
      {/* <button onClick={handleCLick} >Modifier le titre</button> */}
      {/* <button onClick={() => handleCLickFat("Super titre")} >Modifier le titre</button> */}

    </>
  )
}

export default Title