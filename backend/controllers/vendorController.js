import Vendor from '../models/vendors.js';
import { vendorsDetailsData } from '../vendorDetailsData.js';
import { vendorsData } from '../vendorsData.js';
import vendorDetails from '../models/vendorDetails.js';

export const getVendors = async (req, res, next) => {

  try {
    const vendors = await Vendor.find()
      .sort({ dateAdded: -1 }) 
      .lean(); 

    vendors.sort((a, b) => a.vendorName.localeCompare(b.vendorName)); 

    res.status(200).json({
      data: vendors,
      totalPages: 1, // Since pagination is removed, totalPages is always 1
      currentPage: 1  // Similarly, currentPage is always 1
    });
  } catch (error) {
    next(error);
  }
};

export const getVendorsLatest = async (req, res, next) => {
  try {
    const vendors = await Vendor.find().sort({ dateAdded: -1 }).limit(5);
    res.status(200).json(vendors);
  } catch (error) {
    next(error);
  }
};

export const vendorlatestCount = async (req, res, next) => {
  try {
    const vendorCount = await Vendor.countDocuments();
        res.status(200).json(vendorCount);
  } catch (error) {
    next(error);
  }
};

export const getVendorDetails = async (req, res, next) => {
  try {
    const vendors = await vendorDetails.find();
    res.status(200).json(vendors);
  } catch (error) {
    next(error);
  }
};

export const getVendorDetailsById = async (req, res, next) => {
  try {
    const vendors = await vendorDetails.findOne({"companyId":req.params.id});
    res.status(200).json(vendors);
  } catch (error) {
    next(error);
  }
};



export const createVendors = async (req,res) => {
    const vendors = vendorsData; // Assuming vendors data comes from the request body
    try {
      const insertedVendors = await Vendor.insertMany(vendors);
      res.status(201).json(insertedVendors);
    } catch (error) {
     res.send(error)
    }
  };

  export const createVendorDetails = async (req,res) => {
    const vendors = vendorsDetailsData // Assuming vendors data comes from the request body
    try {
      const insertedVendors = await vendorDetails.insertMany(vendors);
      res.status(201).json(insertedVendors);
    } catch (error) {
     res.send(error)
    }
  };