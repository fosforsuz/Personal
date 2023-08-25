import { useEffect } from "react";
import { useAppDispatch } from "../store/hook";
import api from "../api/api";
import Endpoints from "../api/endpoint";
import { addCategory } from "../reducers/categoryBaseSlice";
import { addMessage } from "../reducers/alertMessageSlice";


export default function useProjects() {

    const dispatch = useAppDispatch();

    useEffect(() => {
        const getCategories = async () => {
            try {
                const response = await api.get(Endpoints.GET_CATEGORY);
                if (response.status === 200) {
                    dispatch(addCategory({ categories: response.data }))
                } else {
                    dispatch(addMessage({ message: "Something went wrong" }));
                }
            } catch (error) {
                dispatch(addMessage({ message: "Something went wrong" }));
            }
        }

        getCategories();

    }, [dispatch]);
}
