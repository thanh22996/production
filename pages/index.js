import { END } from "redux-saga";
import { wrapper } from "../store";
import { getListSchools } from "redux/actions/school.actions.js";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import useNextPage from "utils/helpers/hooks/useNextPage";
import Main from "components/Main";

function Index() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { pageShow, setNextPage, setDefaultPage } = useNextPage();

  console.log(router);

  useEffect(() => {
    const data = {};
    console.log("use efuck");

    dispatch(getListSchools(data));
  }, [pageShow]);

  return (
    <>
      <Main isMenu={pageShow.isMenu} setDefaultPage={setDefaultPage}></Main>
    </>
  );
}

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  store.dispatch(getListSchools());
  store.dispatch(END);
  await store.sagaTask.toPromise();
});

export default Index;
