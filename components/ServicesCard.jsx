



const ServicesCard = ({ icon, title, description }) => {
  return (
    <motion.div
      className="bg-gray-50 p-8 rounded-lg shadow-sm"
      variants={getVariant()}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <div className="rounded-full p-3 w-fit bg-white shadow-md mx-auto mb-4">
        <img className="h-16" src={icon} alt={title} />
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export default ServicesCard;
