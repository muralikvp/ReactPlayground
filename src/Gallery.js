function formatDate(date){
    return new Intl.DateTimeFormat("en-US",{weekday:"long"}).format(date);
}

export function Profile() {
  const HopeTutorsLogo =
    "https://www.hopetutors.com/wp-content/uploads/2019/01/Hope-Tutors-final-logo.png";
  const Description = "Hope Tutors";
   const today = new Date(); 
//28/8/2023 T8648374687324687


  return (
    <>
    <img src={HopeTutorsLogo} alt={Description} height="50px" />
    <h1>Todo List for {formatDate(today)}</h1>

    </>
  );
}

export default function Gallery(){
return (
    <section> 
        <h1>Gallery Function</h1>
        <Profile />
    </section>
)
}