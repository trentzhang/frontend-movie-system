"use server";
import { getData } from "@/lib/dataFetchers";
type SearchCriteria = {
  language: string;
  type: string;
  keyword: string;
  searchType: string;
  page: number;
};
export async function getSearchResults(searchCriteria: SearchCriteria) {}
