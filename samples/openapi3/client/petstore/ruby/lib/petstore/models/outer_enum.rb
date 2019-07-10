=begin
#OpenAPI Petstore

#This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\

The version of the OpenAPI document: 1.0.0

Generated by: https://openapi-generator.tech
OpenAPI Generator version: 4.1.0-SNAPSHOT

=end

require 'date'

module Petstore
  class OuterEnum
    PLACED = "placed".freeze
    APPROVED = "approved".freeze
    DELIVERED = "delivered".freeze

    # Builds the enum from string
    # @param [String] The enum value in the form of the string
    # @return [String] The enum value
    def self.build_from_hash(value)
      new.build_from_hash(value)
    end

    # Builds the enum from string
    # @param [String] The enum value in the form of the string
    # @return [String] The enum value
    def build_from_hash(value)
      constantValues = OuterEnum.constants.select { |c| OuterEnum::const_get(c) == value }
      raise "Invalid ENUM value #{value} for class #OuterEnum" if constantValues.empty?
      value
    end
  end
end
