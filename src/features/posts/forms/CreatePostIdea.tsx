import LibButton, { ButtonSizeEnum } from "@/components/library/Button";
import LibCard from "@/components/library/Card";
import LibInput, { InputType } from "@/components/library/Input";
import httpService from "@/services/http.service";
import { useForm, SubmitHandler } from "react-hook-form";
import IPost from "../post.interface";
import { PostStatus } from "@prisma/client";

const CreatePostIdea: React.FC = () => {
  type NewPost = Pick<IPost, "title" | "status" | "notes">;

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
    <LibCard heading="New Idea" isCollapsible={true} defaultState="collapsed">
      <form className="space-y-4" onSubmit={handleSubmit(submit)}>
        <LibInput
          name="title"
          label="Title"
          control={control}
          rules={{ required: "Title is required" }}
          error={errors.title}
          autofocus={true}
        />

        <LibInput
          name="notes"
          label="Notes"
          type={InputType.Multiline}
          control={control}
          error={errors.notes}
        />

        <div className="flex justify-end">
          <LibButton isSubmit={true} size={ButtonSizeEnum.Small}>
            Save
          </LibButton>
        </div>
      </form>
    </LibCard>
  );
};

export default CreatePostIdea;
