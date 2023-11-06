function SpecialThanks() {
  return (
    <>
      <div className="m-auto my-2 w-1/2 2xl:w-1/3 xl:w-1/3 lg:w-1/2 border-2 border-green-500">
        <h2 className="text-3xl font-bold">Special Thanks</h2>
        <p className="text-left">
          A very special thanks to{' '}
          <a
            href="https://www.linkedin.com/in/udelduca"
            className={'underline text-blue-600'}
          >
            Rodolfo Usó Delduca
          </a>
          , who provided the idea to create this lovely website. Rod, your idea
          for this website inspired me.
        </p>
        <br />
        <p className="text-left">
          Thanks as well to the entire cohort of mates and the facilitators in
          Matai-2023 for their support and help during the lovely 17 weeks at
          Dev Academy Aotearoa.
        </p>
      </div>
    </>
  )
}

export default SpecialThanks
