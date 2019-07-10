/**
 * OpenAPI Petstore
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * The version of the OpenAPI document: 1.0.0
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.1.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.OpenApiPetstore) {
      root.OpenApiPetstore = {};
    }
    root.OpenApiPetstore.TypeHolderExample = factory(root.OpenApiPetstore.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The TypeHolderExample model module.
   * @module model/TypeHolderExample
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>TypeHolderExample</code>.
   * @alias module:model/TypeHolderExample
   * @class
   * @param stringItem {String} 
   * @param numberItem {Number} 
   * @param integerItem {Number} 
   * @param boolItem {Boolean} 
   * @param arrayItem {Array.<Number>} 
   */
  var exports = function(stringItem, numberItem, integerItem, boolItem, arrayItem) {
    var _this = this;

    _this['string_item'] = stringItem;
    _this['number_item'] = numberItem;
    _this['integer_item'] = integerItem;
    _this['bool_item'] = boolItem;
    _this['array_item'] = arrayItem;
  };

  /**
   * Constructs a <code>TypeHolderExample</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TypeHolderExample} obj Optional instance to populate.
   * @return {module:model/TypeHolderExample} The populated <code>TypeHolderExample</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('string_item')) {
        obj['string_item'] = ApiClient.convertToType(data['string_item'], 'String');
      }
      if (data.hasOwnProperty('number_item')) {
        obj['number_item'] = ApiClient.convertToType(data['number_item'], 'Number');
      }
      if (data.hasOwnProperty('integer_item')) {
        obj['integer_item'] = ApiClient.convertToType(data['integer_item'], 'Number');
      }
      if (data.hasOwnProperty('bool_item')) {
        obj['bool_item'] = ApiClient.convertToType(data['bool_item'], 'Boolean');
      }
      if (data.hasOwnProperty('array_item')) {
        obj['array_item'] = ApiClient.convertToType(data['array_item'], ['Number']);
      }
    }
    return obj;
  }

  /**
   * @member {String} string_item
   */
  exports.prototype['string_item'] = undefined;
  /**
   * @member {Number} number_item
   */
  exports.prototype['number_item'] = undefined;
  /**
   * @member {Number} integer_item
   */
  exports.prototype['integer_item'] = undefined;
  /**
   * @member {Boolean} bool_item
   */
  exports.prototype['bool_item'] = undefined;
  /**
   * @member {Array.<Number>} array_item
   */
  exports.prototype['array_item'] = undefined;



  return exports;
}));


