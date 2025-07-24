import FormOneColumn from "@/components/form/FormOneColumn"
import FormThreeColumn from "@/components/form/FormThreeColumn"
import FormTwoColumn from "@/components/form/FormTwoColumn"
import FormOneColumnHorizontal from "@/components/form/FormOneColumnHorizontal"
import FormTwoColumnHorizontal from "@/components/form/FormTwoColumnHorizontal"
import FormThreeColumnHorizontal from "@/components/form/FormThreeColumnHorizontal"

export default function FormElements() {
    return (
        <div className="px-8 py-6">
          
 
        <section className="mb-10 rounded-lg border px-6 py-2 shadow-sm bg-background/50 backdrop-blur-sm">
          
            <FormOneColumn />  
        </section>
        <section className="mb-10 rounded-lg border px-6 py-2 shadow-sm bg-background/50 backdrop-blur-sm">
            <FormTwoColumn />
        </section>
        <section className="mb-10 rounded-lg border px-6 py-2 shadow-sm bg-background/50 backdrop-blur-sm">
            <FormThreeColumn />
        </section>
        <section className="mb-10 rounded-lg border px-6 py-2 shadow-sm bg-background/50 backdrop-blur-sm">
            <FormOneColumnHorizontal />
        </section>
        <section className="mb-10 rounded-lg border px-6 py-2 shadow-sm bg-background/50 backdrop-blur-sm">
            <FormTwoColumnHorizontal />
        </section>  
        <section className="mb-10 rounded-lg border px-6 py-2 shadow-sm bg-background/50 backdrop-blur-sm">
            <FormThreeColumnHorizontal />
        </section>

        </div>
    )
}