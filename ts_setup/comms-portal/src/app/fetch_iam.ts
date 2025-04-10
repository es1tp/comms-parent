import { IamApi } from "@dxs-ts/gamut";
import { getVirtualResponse } from "./response_builder";

export function createIamFetch() {
  const fetchUserGET: IamApi.FetchUserGET = async () => {
    return {
      ...getVirtualResponse(),
      ok: false
    };
  }

  const fetchUserRolesGET: IamApi.FetchUserRolesGET = async () => {
    return getVirtualResponse();
  }

  const fetchUserProductsGET: IamApi.FetchUserProductsGET = async () => {
    return getVirtualResponse();
  }

  const fetchUserLivenessGET: IamApi.FetchUserLivenessGET = async () => {
    return getVirtualResponse();
  }

  return { fetchUserGET, fetchUserRolesGET, fetchUserProductsGET, fetchUserLivenessGET };
}

