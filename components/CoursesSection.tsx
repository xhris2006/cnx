const courses = [
  {
    title: 'Sciences & Engineering',
    description: 'Supports de cours, TD, TP et anciens sujets pour les filieres scientifiques.',
  },
  {
    title: 'Business & Economics',
    description: 'Ressources pour comptabilite, gestion, economie et entrepreneuriat.',
  },
  {
    title: 'Health & Life Sciences',
    description: 'Documents de revision et contenus structures pour les filieres medicales et biologiques.',
  },
]

export function CoursesSection() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Explore Popular Learning Tracks
          </h2>
          <p className="text-lg text-gray-600">
            Organise tes ressources par filiere et retrouve plus vite les contenus utiles.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {courses.map((course) => (
            <article
              key={course.title}
              className="rounded-2xl border border-gray-200 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="mb-3 text-xl font-semibold text-gray-900">{course.title}</h3>
              <p className="text-gray-600">{course.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
