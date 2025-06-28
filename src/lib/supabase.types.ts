export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      categories: {
        Row: {
          created_at: string | null;
          id: number;
          name_by: string | null;
          name_en: string;
          name_ka: string | null;
          name_ru: string | null;
          picture_url: string | null;
        };
        Insert: {
          created_at?: string | null;
          id?: number;
          name_by?: string | null;
          name_en: string;
          name_ka?: string | null;
          name_ru?: string | null;
          picture_url?: string | null;
        };
        Update: {
          created_at?: string | null;
          id?: number;
          name_by?: string | null;
          name_en?: string;
          name_ka?: string | null;
          name_ru?: string | null;
          picture_url?: string | null;
        };
        Relationships: [];
      };
      favorites: {
        Row: {
          created_at: string | null;
          id: number;
          is_favorite: boolean | null;
          user_id: string;
          word_id: number;
        };
        Insert: {
          created_at?: string | null;
          id?: number;
          is_favorite?: boolean | null;
          user_id: string;
          word_id: number;
        };
        Update: {
          created_at?: string | null;
          id?: number;
          is_favorite?: boolean | null;
          user_id?: string;
          word_id?: number;
        };
        Relationships: [
          {
            foreignKeyName: 'favorites_word_id_fkey';
            columns: ['word_id'];
            isOneToOne: false;
            referencedRelation: 'words';
            referencedColumns: ['id'];
          },
        ];
      };
      roles: {
        Row: {
          role: string;
          user_id: string;
        };
        Insert: {
          role: string;
          user_id: string;
        };
        Update: {
          role?: string;
          user_id?: string;
        };
        Relationships: [];
      };
      statistic: {
        Row: {
          created_at: string | null;
          id: number;
          is_learned: boolean | null;
          right_answers: number | null;
          user_id: string;
          word_id: number;
          wrong_answers: number | null;
        };
        Insert: {
          created_at?: string | null;
          id?: number;
          is_learned?: boolean | null;
          right_answers?: number | null;
          user_id: string;
          word_id: number;
          wrong_answers?: number | null;
        };
        Update: {
          created_at?: string | null;
          id?: number;
          is_learned?: boolean | null;
          right_answers?: number | null;
          user_id?: string;
          word_id?: number;
          wrong_answers?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: 'statistic_word_id_fkey';
            columns: ['word_id'];
            isOneToOne: false;
            referencedRelation: 'words';
            referencedColumns: ['id'];
          },
        ];
      };
      words: {
        Row: {
          category_id: number | null;
          created_at: string | null;
          id: number;
          name_by: string | null;
          name_en: string;
          name_ka: string | null;
          name_ru: string | null;
          picture_url: string | null;
          speech_part: Database['public']['Enums']['speech_part'] | null;
          transcription_en: string | null;
        };
        Insert: {
          category_id?: number | null;
          created_at?: string | null;
          id?: number;
          name_by?: string | null;
          name_en: string;
          name_ka?: string | null;
          name_ru?: string | null;
          picture_url?: string | null;
          speech_part?: Database['public']['Enums']['speech_part'] | null;
          transcription_en?: string | null;
        };
        Update: {
          category_id?: number | null;
          created_at?: string | null;
          id?: number;
          name_by?: string | null;
          name_en?: string;
          name_ka?: string | null;
          name_ru?: string | null;
          picture_url?: string | null;
          speech_part?: Database['public']['Enums']['speech_part'] | null;
          transcription_en?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: 'words_category_id_fkey';
            columns: ['category_id'];
            isOneToOne: false;
            referencedRelation: 'categories';
            referencedColumns: ['id'];
          },
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      get_all_words: {
        Args: {
          user_id_param?: string;
        };
        Returns: Database['public']['CompositeTypes']['word'][];
      };
      get_game_word: {
        Args: Record<PropertyKey, never>;
        Returns: Database['public']['CompositeTypes']['game_word'][];
      };
      get_random_word: {
        Args: Record<PropertyKey, never>;
        Returns: {
          category_id: number | null;
          created_at: string | null;
          id: number;
          name_by: string | null;
          name_en: string;
          name_ka: string | null;
          name_ru: string | null;
          picture_url: string | null;
          speech_part: Database['public']['Enums']['speech_part'] | null;
          transcription_en: string | null;
        }[];
      };
      get_user_statistic: {
        Args: {
          user_id_param: string;
        };
        Returns: {
          total_words: number;
          learned_words: number;
          favorite_words: number;
        }[];
      };
      is_admin: {
        Args: Record<PropertyKey, never>;
        Returns: boolean;
      };
      set_word_learned: {
        Args: {
          user_id_param: string;
          word_id_param: number;
        };
        Returns: undefined;
      };
      toggle_favorite_word: {
        Args: {
          user_id_param: string;
          word_id_param: number;
        };
        Returns: undefined;
      };
      update_word_statistic: {
        Args: {
          user_id_param: string;
          word_id_param: number;
          is_right_param: boolean;
        };
        Returns: undefined;
      };
    };
    Enums: {
      speech_part:
        | 'noun'
        | 'adjective'
        | 'numeral'
        | 'pronoun'
        | 'verb'
        | 'adverb'
        | 'postposition'
        | 'conjunction'
        | 'particle'
        | 'interjection';
    };
    CompositeTypes: {
      game_word: {
        id: number | null;
        name_en: string | null;
        name_ka: string | null;
        picture_url: string | null;
        variants: string[] | null;
      };
      word: {
        id: number | null;
        name_ka: string | null;
        name_en: string | null;
        name_ru: string | null;
        transcription_en: string | null;
        category_id: number | null;
        picture_url: string | null;
        speech_part: Database['public']['Enums']['speech_part'] | null;
        created_at: string | null;
        is_favorite: boolean | null;
        is_learned: boolean | null;
      };
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, 'public'>];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema['Tables'] & PublicSchema['Views'])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] &
        Database[PublicTableNameOrOptions['schema']]['Views'])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions['schema']]['Tables'] &
      Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema['Tables'] &
        PublicSchema['Views'])
    ? (PublicSchema['Tables'] &
        PublicSchema['Views'])[PublicTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
    ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
    ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema['Enums']
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema['Enums']
    ? PublicSchema['Enums'][PublicEnumNameOrOptions]
    : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema['CompositeTypes']
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes']
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes'][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema['CompositeTypes']
    ? PublicSchema['CompositeTypes'][PublicCompositeTypeNameOrOptions]
    : never;
