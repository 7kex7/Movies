import ActorForm from "./ActorForm";

export default function CreateActor() {
  return (
    <>
      <h3>Create Actor</h3>
      <ActorForm 
        onSubmit={async value => {
          await new Promise(r => setTimeout(r, 1000))
          console.log(value);
        }}
        model={{
          name: ''
        }}
      />
    </>
  )
}
