import { ButtonGoBack } from "components/buttons";
import { ImageWrapper, PartFrame } from "components/frame";
import { TextList } from "components/text";
import { useEffect, useLayoutEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { HttpService } from "services/http/http.service";
import { IExercicePost } from "utils/types/IExercicePost.interface";
import NotFoundView from "views/notFind-view/notFindView";
import "./signleExerciceView.scss";

const SingleExerciceView = () => {
  const http = new HttpService();

  const { id } = useParams();
  const [title, setTitle] = useState<string>("");
  const [titlesplit, setTitleSplit] = useState<string[]>([]);
  const [exercice, setExercice] = useState<IExercicePost>();

  const getExercice = async () => {
    try {
      const response = await http.get(`/exercicePost/${id}`);
      if (response.status !== 400) {
        setExercice(response);
      }
    } catch {}
  };

  useLayoutEffect(() => {
    if (id !== undefined) {
      setTitle(id.replaceAll("-", " "));
      setTitleSplit(id.split("-"));
    }
    getExercice();
  }, [""]);

  if (exercice !== undefined) {
    return (
      <div className="main-container single-exercice">
        <div className="single-exercice-go-back grid grid-cols-3 ">
          <ButtonGoBack text="retour" link="../" />
        </div>
        <div className=" md:grid  md:grid-cols-3 gap-4">
          <div className="single-exercice-title">
            <span className="single-exercice-title-transparent">Exercice</span>
            {titlesplit.map((element: string, id: number) => (
              <span className="single-exercice-title-full" key={id}>
                {element}
              </span>
            ))}
          </div>

          <ImageWrapper imgUrl={exercice.imgUrl} alt={title} />
        </div>
        <div className="single-exercice-description">
          <PartFrame title="Description" />
          <p>{exercice.description}</p>
        </div>

        <div className="single-exercice-how-to">
          <PartFrame title={"Comment faire le " + title} />
          <TextList list={exercice.howToRealise} />
        </div>
      </div>
    );
  } else {
    return <NotFoundView />;
  }
};
export default SingleExerciceView;
