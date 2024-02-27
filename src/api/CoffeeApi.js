import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const CoffeeApi = createApi({
    reducerPath: "CoffeeApi",
	baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
	endpoints: builder => ({
		getAllCoffee: builder.query({
			query: () => "/coffee"
		}),
		getSingleCoffee: builder.query({
			query: (id) => `/coffee/${id}`
		})
	})
});

export const { useGetAllCoffeeQuery, useGetSingleCoffeeQuery } = CoffeeApi;