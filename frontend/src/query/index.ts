//@ts-nocheck
import {
  useMutation,
  useQuery
} from '@tanstack/react-query'
import type {
  MutationFunction,
  QueryFunction,
  QueryKey,
  UseMutationOptions,
  UseQueryOptions,
  UseQueryResult
} from '@tanstack/react-query'
import { request } from '../api/axios';
import type { ErrorType } from '../api/axios';
export type CreateUserBody = {
  name: string;
};

export type DeleteBarbecueBody = {
  id: number;
};

export type SearchBarbecueBody = {
  search: string;
};

export type CreateBarbecueBodyAttendeesItem = {
  fee: number;
  name: string;
};

export type CreateBarbecueBody = {
  address: string;
  attendees: CreateBarbecueBodyAttendeesItem[];
  date: string;
  description: string;
};

export type GetUsersIndexResponseItem = {
  createdAt: string;
  id: number;
  name: string;
};

export type GetUsersIndexResponse = GetUsersIndexResponseItem[];

export interface CreateUserResponse {
  createdAt: string;
  id: number;
  name: string;
}

export type ListBarbecueByIdResponseAttendeesItem = {
  barbecueId: number;
  fee: number;
  id: number;
  name: string;
};

export interface ListBarbecueByIdResponse {
  address: string;
  attendees: ListBarbecueByIdResponseAttendeesItem[];
  createdAt: string;
  date: string;
  description: string;
  id: number;
}

export interface DeleteBarbecueResponse {
  address: string;
  createdAt: string;
  date: string;
  description: string;
  id: number;
}

export type SearchBarbecueResponseItemAttendeesItem = {
  fee: number;
};

export type SearchBarbecueResponseItem = {
  address: string;
  attendees: SearchBarbecueResponseItemAttendeesItem[];
  date: string;
  description: string;
  id: number;
};

export type SearchBarbecueResponse = SearchBarbecueResponseItem[];

export type ListBarbecueResponseItemAttendeesItem = {
  fee: number;
};

export type ListBarbecueResponseItem = {
  address: string;
  attendees: ListBarbecueResponseItemAttendeesItem[];
  date: string;
  description: string;
  id: number;
};

export type ListBarbecueResponse = ListBarbecueResponseItem[];

export interface CreateBarbecueResponse {
  address: string;
  createdAt: string;
  date: string;
  description: string;
  id: number;
}

export interface HealthCheckResponse {
  status: string;
}





export const createBarbecue = (
    createBarbecueBody: CreateBarbecueBody,
 ) => {
      
      
      return request<CreateBarbecueResponse>(
      {url: `/barbecue/create`, method: 'post',
      headers: {'Content-Type': 'application/json', },
      data: createBarbecueBody
    },
      );
    }
  


export const getCreateBarbecueMutationOptions = <TError = ErrorType<unknown>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof createBarbecue>>, TError,{data: CreateBarbecueBody}, TContext>, }
): UseMutationOptions<Awaited<ReturnType<typeof createBarbecue>>, TError,{data: CreateBarbecueBody}, TContext> => {
 const {mutation: mutationOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof createBarbecue>>, {data: CreateBarbecueBody}> = (props) => {
          const {data} = props ?? {};

          return  createBarbecue(data,)
        }

        


   return  { mutationFn, ...mutationOptions }}

    export type CreateBarbecueMutationResult = NonNullable<Awaited<ReturnType<typeof createBarbecue>>>
    export type CreateBarbecueMutationBody = CreateBarbecueBody
    export type CreateBarbecueMutationError = ErrorType<unknown>

    export const useCreateBarbecue = <TError = ErrorType<unknown>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof createBarbecue>>, TError,{data: CreateBarbecueBody}, TContext>, }
) => {

      const mutationOptions = getCreateBarbecueMutationOptions(options);

      return useMutation(mutationOptions);
    }
    
export const listBarbecue = (
    
 signal?: AbortSignal
) => {
      
      
      return request<ListBarbecueResponse>(
      {url: `/barbecue/list`, method: 'get', signal
    },
      );
    }
  

export const getListBarbecueQueryKey = () => {
    
    return [`/barbecue/list`] as const;
    }

    
export const getListBarbecueQueryOptions = <TData = Awaited<ReturnType<typeof listBarbecue>>, TError = ErrorType<unknown>>( options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof listBarbecue>>, TError, TData>>, }
) => {

const {query: queryOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getListBarbecueQueryKey();

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof listBarbecue>>> = ({ signal }) => listBarbecue(signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof listBarbecue>>, TError, TData> & { queryKey: QueryKey }
}

export type ListBarbecueQueryResult = NonNullable<Awaited<ReturnType<typeof listBarbecue>>>
export type ListBarbecueQueryError = ErrorType<unknown>

export const useListBarbecue = <TData = Awaited<ReturnType<typeof listBarbecue>>, TError = ErrorType<unknown>>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof listBarbecue>>, TError, TData>>, }

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getListBarbecueQueryOptions(options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




export const searchBarbecue = (
    searchBarbecueBody: SearchBarbecueBody,
 ) => {
      
      
      return request<SearchBarbecueResponse>(
      {url: `/barbecue/search`, method: 'post',
      headers: {'Content-Type': 'application/json', },
      data: searchBarbecueBody
    },
      );
    }
  


export const getSearchBarbecueMutationOptions = <TError = ErrorType<unknown>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof searchBarbecue>>, TError,{data: SearchBarbecueBody}, TContext>, }
): UseMutationOptions<Awaited<ReturnType<typeof searchBarbecue>>, TError,{data: SearchBarbecueBody}, TContext> => {
 const {mutation: mutationOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof searchBarbecue>>, {data: SearchBarbecueBody}> = (props) => {
          const {data} = props ?? {};

          return  searchBarbecue(data,)
        }

        


   return  { mutationFn, ...mutationOptions }}

    export type SearchBarbecueMutationResult = NonNullable<Awaited<ReturnType<typeof searchBarbecue>>>
    export type SearchBarbecueMutationBody = SearchBarbecueBody
    export type SearchBarbecueMutationError = ErrorType<unknown>

    export const useSearchBarbecue = <TError = ErrorType<unknown>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof searchBarbecue>>, TError,{data: SearchBarbecueBody}, TContext>, }
) => {

      const mutationOptions = getSearchBarbecueMutationOptions(options);

      return useMutation(mutationOptions);
    }
    
export const deleteBarbecue = (
    id: string,
    deleteBarbecueBody: DeleteBarbecueBody,
 ) => {
      
      
      return request<DeleteBarbecueResponse>(
      {url: `/barbecue/${id}/delete`, method: 'post',
      headers: {'Content-Type': 'application/json', },
      data: deleteBarbecueBody
    },
      );
    }
  


export const getDeleteBarbecueMutationOptions = <TError = ErrorType<unknown>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteBarbecue>>, TError,{id: string;data: DeleteBarbecueBody}, TContext>, }
): UseMutationOptions<Awaited<ReturnType<typeof deleteBarbecue>>, TError,{id: string;data: DeleteBarbecueBody}, TContext> => {
 const {mutation: mutationOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof deleteBarbecue>>, {id: string;data: DeleteBarbecueBody}> = (props) => {
          const {id,data} = props ?? {};

          return  deleteBarbecue(id,data,)
        }

        


   return  { mutationFn, ...mutationOptions }}

    export type DeleteBarbecueMutationResult = NonNullable<Awaited<ReturnType<typeof deleteBarbecue>>>
    export type DeleteBarbecueMutationBody = DeleteBarbecueBody
    export type DeleteBarbecueMutationError = ErrorType<unknown>

    export const useDeleteBarbecue = <TError = ErrorType<unknown>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof deleteBarbecue>>, TError,{id: string;data: DeleteBarbecueBody}, TContext>, }
) => {

      const mutationOptions = getDeleteBarbecueMutationOptions(options);

      return useMutation(mutationOptions);
    }
    
export const listBarbecueById = (
    id: number,
 signal?: AbortSignal
) => {
      
      
      return request<ListBarbecueByIdResponse>(
      {url: `/barbecue/${id}`, method: 'get', signal
    },
      );
    }
  

export const getListBarbecueByIdQueryKey = (id: number,) => {
    
    return [`/barbecue/${id}`] as const;
    }

    
export const getListBarbecueByIdQueryOptions = <TData = Awaited<ReturnType<typeof listBarbecueById>>, TError = ErrorType<unknown>>(id: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof listBarbecueById>>, TError, TData>>, }
) => {

const {query: queryOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getListBarbecueByIdQueryKey(id);

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof listBarbecueById>>> = ({ signal }) => listBarbecueById(id, signal);

      

      

   return  { queryKey, queryFn, enabled: !!(id), ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof listBarbecueById>>, TError, TData> & { queryKey: QueryKey }
}

export type ListBarbecueByIdQueryResult = NonNullable<Awaited<ReturnType<typeof listBarbecueById>>>
export type ListBarbecueByIdQueryError = ErrorType<unknown>

export const useListBarbecueById = <TData = Awaited<ReturnType<typeof listBarbecueById>>, TError = ErrorType<unknown>>(
 id: number, options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof listBarbecueById>>, TError, TData>>, }

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getListBarbecueByIdQueryOptions(id,options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




export const createUser = (
    createUserBody: CreateUserBody,
 ) => {
      
      
      return request<CreateUserResponse>(
      {url: `/users`, method: 'post',
      headers: {'Content-Type': 'application/json', },
      data: createUserBody
    },
      );
    }
  


export const getCreateUserMutationOptions = <TError = ErrorType<unknown>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof createUser>>, TError,{data: CreateUserBody}, TContext>, }
): UseMutationOptions<Awaited<ReturnType<typeof createUser>>, TError,{data: CreateUserBody}, TContext> => {
 const {mutation: mutationOptions} = options ?? {};

      


      const mutationFn: MutationFunction<Awaited<ReturnType<typeof createUser>>, {data: CreateUserBody}> = (props) => {
          const {data} = props ?? {};

          return  createUser(data,)
        }

        


   return  { mutationFn, ...mutationOptions }}

    export type CreateUserMutationResult = NonNullable<Awaited<ReturnType<typeof createUser>>>
    export type CreateUserMutationBody = CreateUserBody
    export type CreateUserMutationError = ErrorType<unknown>

    export const useCreateUser = <TError = ErrorType<unknown>,
    
    TContext = unknown>(options?: { mutation?:UseMutationOptions<Awaited<ReturnType<typeof createUser>>, TError,{data: CreateUserBody}, TContext>, }
) => {

      const mutationOptions = getCreateUserMutationOptions(options);

      return useMutation(mutationOptions);
    }
    
export const getUsersIndex = (
    
 signal?: AbortSignal
) => {
      
      
      return request<GetUsersIndexResponse>(
      {url: `/users`, method: 'get', signal
    },
      );
    }
  

export const getGetUsersIndexQueryKey = () => {
    
    return [`/users`] as const;
    }

    
export const getGetUsersIndexQueryOptions = <TData = Awaited<ReturnType<typeof getUsersIndex>>, TError = ErrorType<unknown>>( options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getUsersIndex>>, TError, TData>>, }
) => {

const {query: queryOptions} = options ?? {};

  const queryKey =  queryOptions?.queryKey ?? getGetUsersIndexQueryKey();

  

    const queryFn: QueryFunction<Awaited<ReturnType<typeof getUsersIndex>>> = ({ signal }) => getUsersIndex(signal);

      

      

   return  { queryKey, queryFn, ...queryOptions} as UseQueryOptions<Awaited<ReturnType<typeof getUsersIndex>>, TError, TData> & { queryKey: QueryKey }
}

export type GetUsersIndexQueryResult = NonNullable<Awaited<ReturnType<typeof getUsersIndex>>>
export type GetUsersIndexQueryError = ErrorType<unknown>

export const useGetUsersIndex = <TData = Awaited<ReturnType<typeof getUsersIndex>>, TError = ErrorType<unknown>>(
  options?: { query?:Partial<UseQueryOptions<Awaited<ReturnType<typeof getUsersIndex>>, TError, TData>>, }

  ):  UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getGetUsersIndexQueryOptions(options)

  const query = useQuery(queryOptions) as  UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey ;

  return query;
}




