import ProjectDetail from "@/app/layouts/project/detail";
interface Params {
  params: {
    slug: string;
  };
}

export default async function page({ params }: Params) {
  return <ProjectDetail slug={params.slug} />;
}
