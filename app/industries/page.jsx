import IndustriesWeServe from "@/components/IndustriesWeServe"
import PageHeader from "@/components/pageHeader"

const page = () => {
  return (
    <section className="min-h-screen bg-gray-50">
      <PageHeader 
        title="Industries We Serve" 
        subtitle="Sanmara’s expertise spans multiple sectors, giving us the versatility
          to adapt to any business landscape. Our key industries includes" 
      />
      <IndustriesWeServe />
    </section>
  )
}

export default page