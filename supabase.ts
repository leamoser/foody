export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      people: {
        Row: {
          birthday: string | null
          created_at: string | null
          name: string | null
          uid: string
          weight: number | null
        }
        Insert: {
          birthday?: string | null
          created_at?: string | null
          name?: string | null
          uid: string
          weight?: number | null
        }
        Update: {
          birthday?: string | null
          created_at?: string | null
          name?: string | null
          uid?: string
          weight?: number | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
