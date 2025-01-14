export interface MovieDetailsModel {
  id: string,
  title: string,
  duration: string,
  budget: string,
  release_date: string,
  box_office: string,
  cinematographers: string[],
  poster: string,
  producers: string[],
  summary: string
}

export interface MovieDetailsRow {
  label: string,
  field: string,
  formatter?: string
};
