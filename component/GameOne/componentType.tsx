export interface hamster_display_list_type{
    hamster: Array<hamster_Info_type>
}

export interface hamster_Info_type{
    hamster_id: string,
    area_id: string,
    assets_path: string
}

export interface area_type{
    area_id: string
}