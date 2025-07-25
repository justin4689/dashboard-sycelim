import FormOneColumn from "@/components/form/FormOneColumn";
import FormThreeColumn from "@/components/form/FormThreeColumn";
import FormTwoColumn from "@/components/form/FormTwoColumn";
import FormOneColumnHorizontal from "@/components/form/FormOneColumnHorizontal";
import FormTwoColumnHorizontal from "@/components/form/FormTwoColumnHorizontal";
import FormThreeColumnHorizontal from "@/components/form/FormThreeColumnHorizontal";

export default function FormElements() {
  return (
    <div className="px-8 py-6">
      <section className="">
        <FormOneColumn />
      </section>
      <section>
        <FormTwoColumn />
      </section>
      <section >
        <FormThreeColumn />
      </section>
      <section>
        <FormOneColumnHorizontal />
      </section>
      <section >
        <FormTwoColumnHorizontal />
      </section>
      <section >
        <FormThreeColumnHorizontal />
      </section>
    </div>
  );
}
