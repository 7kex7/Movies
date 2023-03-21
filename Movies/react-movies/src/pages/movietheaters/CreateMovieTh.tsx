import MovieTheaterForm from "./MovieTheaterForm";

export default function CreateMovieTh() {
  return (
    <div>
      <MovieTheaterForm 
        onSubmit={async value => {
          await new Promise(r => setTimeout(r, 1000))
          console.log(value);
        }}
        model={{
          name: '',
        }}
      />
    </div>
  )
}
