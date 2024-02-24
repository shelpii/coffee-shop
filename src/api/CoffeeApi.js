import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const CoffeeApi = createApi({
    reducerPath: "CoffeeApi",
	baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
	endpoints: builder => ({
		getAllCoffee: builder.query({
			query: () => "/coffee"
		})
	})
});

export const { useGetAllCoffeeQuery } = CoffeeApi;