import { createApi } from "@reduxjs/toolkit/query/react";
import axios from "axios";
import {IStaff} from "@Interface/Interface";

const axiosBaseQuery = ({ baseUrl }: { baseUrl: string }) => async ({ url, method, data, params }: any) => {
	try {
		const result = await axios({
			url: baseUrl + url,
			method,
			data,
			params,
		});
		return { data: result.data };
	} catch (axiosError: any) {
		return {
			error: {
				status: axiosError.response?.status,
				data: axiosError.response?.data || axiosError.message,
			},
		};
	}
};

export const api = createApi({
	reducerPath: "api",
	baseQuery: axiosBaseQuery({
		baseUrl: "https://3f8572bedc77c278.mokky.dev", // Sizning API bazaviy URLingiz
	}),
	endpoints: (builder) => ({
		getStaff: builder.query({
			query: () => ({
				url: "/staff",
				method: "get",
			}),
		}),
		getStaffById: builder.query({
			query: (id: string | number) => ({
				url: `/staff/${id}`,
				method: "get",
			}),
		}),
		createStaff: builder.mutation({
			query: (newStaff: IStaff) => ({
				url: "/staff",
				method: "post",
				data: newStaff,
			}),
		}),
		editStaff: builder.mutation({
			query: ({ id, newStaff }: { id: string | number; newStaff: IStaff }) => ({
				url: `/staff/${id}`,
				method: "patch",
				data: newStaff,
			}),
		}),
		deleteStaff: builder.mutation({
			query: (id: string | number) => ({
				url: `/staff/${id}`,
				method: "delete",
			}),
		}),
	}),
});

export const {
	useGetStaffQuery,
	useCreateStaffMutation,
	useEditStaffMutation,
	useDeleteStaffMutation,
} = api;

