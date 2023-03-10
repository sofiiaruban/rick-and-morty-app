import { StatusMessage } from "../components/StatusMessage";
export const CharacterInfo = (id) => {
  const { data, error, isLoading } = useGetCharacterByIdQuery(id);

  if (isLoading) {
    return <StatusMessage message="Loading..." />;
  }

  if (error) {
    return <StatusMessage message="Error while loading" />;
  }
  return <div>CharacterInfo</div>;
};
