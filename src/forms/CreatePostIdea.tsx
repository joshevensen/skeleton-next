import LibButton, { ButtonSizeEnum } from "@/library/components/Button";
import LibCard from "@/library/components/Card";
import LibInput, { InputType } from "@/library/components/Input";
import httpService from "@/services/http";
import { useForm, SubmitHandler } from "react-hook-form";
import Post from "../interfaces/post";
import { PostStatus } from "@prisma/client";

const CreatePostIdea: React.FC = () => {
  type NewPost = Pick<Post, "title" | "status" | "notes">;

  const defaultValues: NewPost = {
    title: "",
    status: PostStatus.Ideas,
    notes: "",
  };

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewPost>({ defaultValues: defaultValues });

  const submit: SubmitHandler<NewPost> = (data) => {
    httpService.post("sets", JSON.stringify(data)).then(() => {
      reset();
    });
  };

  return (
    <LibCard heading="New Idea" isCollapsible defaultCollapsed>
      <form className="space-y-4" onSubmit={handleSubmit(submit)}>
        <LibInput
          name="title"
          label="Title"
          control={control}
          rules={{ required: "Title is required" }}
          error={errors.title}
          autofocus
        />

        <LibInput
          name="notes"
          label="Notes"
          type={InputType.Multiline}
          control={control}
          error={errors.notes}
        />

        <div className="flex justify-end">
          <LibButton isSubmit size={ButtonSizeEnum.Small}>
            Save
          </LibButton>
        </div>
      </form>
    </LibCard>
  );
};

export default CreatePostIdea;
