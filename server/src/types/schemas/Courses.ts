export enum CourseStatus {
    active = "active",
    hidden = "hidden",
}

export type CourseRequestType = {
    name: string;
}

export type CourseSchemaType = {
    _id: string;
    modules: [];
    tags: [];
    status: CourseStatus;
} & CourseRequestType;

